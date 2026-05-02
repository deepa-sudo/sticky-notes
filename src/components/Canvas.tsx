import type { Note } from "@types";
import StickyNote from "@components/StickyNote";
import { DndContext, DragOverlay, type DragEndEvent } from "@dnd-kit/core";
import { useState } from "react";

type CanvasProps = {
  notes: Note[];
  activeId: string | null;
  setActiveId: (id: string) => void;
  updateNotePosition: (id: string, x: number, y: number) => void;
};

const colorClasses = {
  yellow: "bg-note-yellow",
  green: "bg-note-green",
  blue: "bg-note-blue",
  pink: "bg-note-pink",
};

const Canvas: React.FC<CanvasProps> = ({
  notes,
  activeId,
  setActiveId,
  updateNotePosition,
}) => {
  const [draggedNote, setDraggedNote] = useState<Note | null>(null);

  const handleDragStart = (event: any) => {
    const note = notes.find((n) => n.id === event.active.id);
    if (note) {
      setDraggedNote(note);
      setActiveId(note.id);
    }
  };

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, delta } = event;
    const note = notes.find((n) => n.id === active.id);

    if (note) {
      const newX = note.x + delta.x;
      const newY = note.y + delta.y;
      updateNotePosition(note.id, newX, newY);
    }

    setDraggedNote(null);
  };

  return (
    <DndContext onDragStart={handleDragStart} onDragEnd={handleDragEnd}>
      <div className="flex-1 relative overflow-hidden">
        {notes.map((note) => (
          <StickyNote
            key={note.id}
            note={{ ...note, isActive: note.id === activeId }}
            onClick={() => setActiveId(note.id)}
          />
        ))}
      </div>
      <DragOverlay>
        {draggedNote && (
          <div
            className={`
              w-56 min-h-[150px] p-3 cursor-grabbing
              ${colorClasses[draggedNote.color]}
              text-text rounded shadow-lg
              opacity-80
            `}
          >
            <p>{draggedNote.content}</p>
          </div>
        )}
      </DragOverlay>
    </DndContext>
  );
};

export default Canvas;
