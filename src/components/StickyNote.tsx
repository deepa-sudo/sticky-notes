import type { Note } from "@types";
import { useEffect, useRef } from "react";

type StickyNoteProps = {
  note: Note;
  onClick: () => void;
  handleEditNote: (id: string, newContent: string) => void;
};

const colorClasses = {
  yellow: "bg-note-yellow",
  green: "bg-note-green",
  blue: "bg-note-blue",
  pink: "bg-note-pink",
};

const paperStyles = {
  style1: "note-squish-right",
  style2: "note-squish-left",
  style3: "note-wobble-bottom",
  style4: "note-warped",
};

export default function StickyNote({
  note,
  onClick,
  handleEditNote,
}: StickyNoteProps) {
  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  useEffect(() => {
    if (note.isActive) {
      const textarea = document.getElementById(
        `textarea-${note.id}`,
      ) as HTMLTextAreaElement;
      if (textarea) {
        textarea.focus();
      }
    }
  }, [note.isActive, note.id]);
  return (
    <div
      onClick={onClick}
      className={`
        w-56 min-h-[150px] p-3 cursor-pointer relative
        ${colorClasses[note.color]}
        ${paperStyles[note.paperStyle]}
        text-text shadow-md
        transition hover:scale-105 hover:shadow-lg
        ${note.isActive ? "ring ring-accent" : ""}
      `}
    >
      <p className="text-lg">{note.title}</p>
      {/* <span className="triangle absolute w-0 h-0 border-solid border-b-[20px] border-l-[20px] border-t-0 border-r-0 border-b-[#d4cbcb36] border-l-transparent border-t-transparent border-r-transparent rotate-0 right-0 bottom-0 rounded-bl-[2px]"></span> */}
      {note.isActive ? (
        <textarea
          ref={textAreaRef}
          id={`textarea-${note.id}`}
          value={note.content}
          onChange={(e) => handleEditNote(note.id, e.target.value)}
          className="mt-1 p-1 w-full border-none outline-none bg-transparent resize-none"
        />
      ) : (
        <p>{note?.content}</p>
      )}
    </div>
  );
}
