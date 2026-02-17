import { useState } from "react";
import { Download, Upload, FileJson } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";

interface CommentsData {
  [pageId: string]: string;
}

export function ExportComments() {
  const [isOpen, setIsOpen] = useState(false);
  const [jsonContent, setJsonContent] = useState("");

  const getAllComments = (): CommentsData => {
    const comments: CommentsData = {};

    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key?.startsWith("page-comment-")) {
        const pageId = key.replace("page-comment-", "");
        const value = localStorage.getItem(key);
        if (value && value.trim()) {
          comments[pageId] = value;
        }
      }
    }

    return comments;
  };

  const handleExport = () => {
    const comments = getAllComments();
    const json = JSON.stringify(comments, null, 2);
    setJsonContent(json);
  };

  const handleDownload = () => {
    const comments = getAllComments();
    const json = JSON.stringify(comments, null, 2);
    const blob = new Blob([json], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "page-comments.json";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const handleImport = () => {
    try {
      const comments: CommentsData = JSON.parse(jsonContent);

      // Clear existing comments
      const keysToRemove: string[] = [];
      for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (key?.startsWith("page-comment-")) {
          keysToRemove.push(key);
        }
      }
      keysToRemove.forEach((key) => localStorage.removeItem(key));

      // Import new comments
      Object.entries(comments).forEach(([pageId, comment]) => {
        if (comment.trim()) {
          localStorage.setItem(`page-comment-${pageId}`, comment);
        }
      });

      alert("Komentáre boli úspešne importované!");
      setIsOpen(false);
      window.location.reload();
    } catch (e) {
      alert("Chyba pri importovaní: Neplatný JSON formát");
    }
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const content = e.target?.result as string;
        setJsonContent(content);
      };
      reader.readAsText(file);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" size="sm" className="gap-2">
          <FileJson className="h-4 w-4" />
          Spravovať poznámky
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle>Export / Import poznámok</DialogTitle>
          <DialogDescription>
            Exportuj poznámky do JSON súboru pre uloženie do Gitu, alebo importuj existujúce poznámky.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4">
          <div className="flex gap-2">
            <Button onClick={handleExport} variant="outline" className="gap-2">
              <FileJson className="h-4 w-4" />
              Načítať poznámky
            </Button>
            <Button onClick={handleDownload} variant="default" className="gap-2">
              <Download className="h-4 w-4" />
              Stiahnuť JSON
            </Button>
            <label>
              <Button variant="outline" className="gap-2" asChild>
                <span>
                  <Upload className="h-4 w-4" />
                  Nahrať JSON
                  <input
                    type="file"
                    accept=".json"
                    onChange={handleFileUpload}
                    className="hidden"
                  />
                </span>
              </Button>
            </label>
          </div>

          <Textarea
            placeholder="JSON obsah poznámok..."
            value={jsonContent}
            onChange={(e) => setJsonContent(e.target.value)}
            className="min-h-[300px] font-mono text-sm"
          />

          <div className="flex justify-end gap-2">
            <Button variant="ghost" onClick={() => setIsOpen(false)}>
              Zavrieť
            </Button>
            <Button onClick={handleImport} disabled={!jsonContent.trim()}>
              Importovať poznámky
            </Button>
          </div>

          <div className="text-xs text-muted-foreground border-t pt-4">
            <p className="font-medium mb-1">Ako uložiť do Gitu:</p>
            <ol className="list-decimal list-inside space-y-1">
              <li>Klikni na "Stiahnuť JSON"</li>
              <li>Ulož súbor <code className="bg-muted px-1 rounded">page-comments.json</code> do <code className="bg-muted px-1 rounded">src/data/</code></li>
              <li>Commitni zmeny: <code className="bg-muted px-1 rounded">git add . && git commit -m "Update comments"</code></li>
            </ol>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
