import type { Note } from "@types";
import StickyNote from "@components/StickyNote";

type CanvasProps = {
  notes: Note[];
  activeId: string | null;
  setActiveId: (id: string) => void;
};

const Canvas: React.FC<CanvasProps> = ({ notes, activeId, setActiveId }) => {
  return (
    <div className="flex-1 overflow-auto p-6">
      <div className="grid grid-cols-[repeat(auto-fill,minmax(240px,1fr))] gap-4 auto-rows-min">
        {notes.map((note) => (
          <StickyNote
            key={note.id}
            note={{ ...note, isActive: note.id === activeId }}
            onClick={() => setActiveId(note.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default Canvas;
