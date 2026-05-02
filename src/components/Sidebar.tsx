import type { Note } from "@types";

type Props = {
  notes: Note[];
  activeId: string | null;
  onSelect: (id: string) => void;
};

export function Sidebar({ notes, activeId, onSelect }: Props) {
  return (
    <div className="w-64 h-screen bg-surface border-r border-border p-3">
      {notes.map((note) => (
        <div
          key={note.id}
          onClick={() => onSelect(note.id)}
          className={`
            p-2 mb-2 rounded cursor-pointer
            ${
              activeId === note.id
                ? "bg-accent-bg border border-accent-border"
                : "hover:bg-gray-100 dark:hover:bg-gray-800"
            }
          `}
        >
          {note.content.slice(0, 20)}
        </div>
      ))}
    </div>
  );
}
