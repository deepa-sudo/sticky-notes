import type { Note } from "@types";
import { useDraggable } from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";

type StickyNoteProps = {
  note: Note;
  onClick: () => void;
};

const colorClasses = {
  yellow: "bg-note-yellow",
  green: "bg-note-green",
  blue: "bg-note-blue",
  pink: "bg-note-pink",
};

export default function StickyNote({ note, onClick }: StickyNoteProps) {
  const { attributes, listeners, setNodeRef, transform, isDragging } =
    useDraggable({
      id: note.id,
    });

  const style = {
    left: note.x,
    top: note.y,
    transform: CSS.Transform.toString(transform),
    opacity: isDragging ? 0.5 : 1,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...listeners}
      {...attributes}
      onClick={onClick}
      className={`
        absolute w-56 min-h-[150px] p-3 cursor-grab active:cursor-grabbing
        ${colorClasses[note.color]}
        text-text rounded-[1px] shadow-md
        transition hover:scale-105 hover:shadow-lg
        ${note.isActive ? "ring-2 ring-accent" : ""}
        ${isDragging ? "z-50" : ""}
      `}
    >
      <p>{note.content}</p>
    </div>
  );
}
