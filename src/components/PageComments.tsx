import { useState, useEffect } from "react";
import { MessageSquare, Save, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

interface PageCommentsProps {
  pageId: string;
}

// Comments are stored in localStorage with key pattern: "page-comment-{pageId}"
const getStorageKey = (pageId: string) => `page-comment-${pageId}`;

export function PageComments({ pageId }: PageCommentsProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [comment, setComment] = useState("");
  const [savedComment, setSavedComment] = useState("");
  const [isSaving, setIsSaving] = useState(false);

  // Load comment from localStorage on mount
  useEffect(() => {
    const stored = localStorage.getItem(getStorageKey(pageId));
    if (stored) {
      setComment(stored);
      setSavedComment(stored);
    } else {
      setComment("");
      setSavedComment("");
    }
  }, [pageId]);

  const handleSave = () => {
    setIsSaving(true);
    localStorage.setItem(getStorageKey(pageId), comment);
    setSavedComment(comment);

    // Also update the comments.json file for git tracking
    updateCommentsFile(pageId, comment);

    setTimeout(() => {
      setIsSaving(false);
    }, 500);
  };

  const handleClear = () => {
    setComment("");
    localStorage.removeItem(getStorageKey(pageId));
    setSavedComment("");
    updateCommentsFile(pageId, "");
  };

  const hasUnsavedChanges = comment !== savedComment;
  const hasComment = savedComment.trim().length > 0;

  return (
    <Collapsible open={isOpen} onOpenChange={setIsOpen} className="mt-6">
      <CollapsibleTrigger asChild>
        <Button
          variant="outline"
          size="sm"
          className={`gap-2 ${hasComment ? 'border-blue-400 text-blue-600' : ''}`}
        >
          <MessageSquare className="h-4 w-4" />
          {hasComment ? "Zobraziť poznámky" : "Pridať poznámku"}
          {hasComment && (
            <span className="ml-1 h-2 w-2 rounded-full bg-blue-500" />
          )}
        </Button>
      </CollapsibleTrigger>
      <CollapsibleContent className="mt-3">
        <div className="rounded-lg border bg-muted/30 p-4 space-y-3">
          <Textarea
            placeholder="Napíš si poznámky k tejto stránke..."
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            className="min-h-[120px] resize-y bg-background"
          />
          <div className="flex justify-between items-center">
            <div className="text-xs text-muted-foreground">
              {hasUnsavedChanges && (
                <span className="text-amber-600">Neuložené zmeny</span>
              )}
            </div>
            <div className="flex gap-2">
              {savedComment && (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={handleClear}
                  className="text-destructive hover:text-destructive"
                >
                  <X className="h-4 w-4 mr-1" />
                  Vymazať
                </Button>
              )}
              <Button
                variant="default"
                size="sm"
                onClick={handleSave}
                disabled={!hasUnsavedChanges || isSaving}
              >
                <Save className="h-4 w-4 mr-1" />
                {isSaving ? "Ukladám..." : "Uložiť"}
              </Button>
            </div>
          </div>
        </div>
      </CollapsibleContent>
    </Collapsible>
  );
}

// Function to update comments.json file (for git tracking)
function updateCommentsFile(pageId: string, comment: string) {
  // Get all comments from localStorage
  const allComments: Record<string, string> = {};

  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    if (key?.startsWith("page-comment-")) {
      const id = key.replace("page-comment-", "");
      const value = localStorage.getItem(key);
      if (value && value.trim()) {
        allComments[id] = value;
      }
    }
  }

  // Update current comment
  if (comment.trim()) {
    allComments[pageId] = comment;
  } else {
    delete allComments[pageId];
  }

  // Store combined comments for export
  localStorage.setItem("all-page-comments", JSON.stringify(allComments, null, 2));

  // Log for debugging - in real app you'd want to sync this to a file
  console.log("Comments updated:", allComments);
}
