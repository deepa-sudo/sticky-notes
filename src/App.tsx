import { useState } from "react";
import { Sidebar } from "@components/Sidebar";
import type { Note } from "@types";
import Canvas from "@components/Canvas";

export default function App() {
  const [notes, setNotes] = useState<Note[]>([
    {
      id: "1",
      title: "First Note",
      content: "My first note",
      color: "yellow",
      paperStyle: "style1",
      x: 0,
      y: 0,
    },
  ]);

  const [activeId, setActiveId] = useState<string | null>(null);
  const handleEditNote = (id: string, newContent: string) => {
    setNotes((prev) =>
      prev.map((note) =>
        note.id === id ? { ...note, content: newContent } : note,
      ),
    );
  };

  return (
    <div className="flex bg-bg text-text h-screen">
      {/* Sidebar */}
      <Sidebar notes={notes} activeId={activeId} onSelect={setActiveId} />

      {/* Canvas */}
      <Canvas
        notes={notes}
        activeId={activeId}
        setActiveId={setActiveId}
        handleEditNote={handleEditNote}
      />

      {/* Add Button */}
      <button
        className="fixed bottom-5 right-5 bg-accent hover:bg-accent-hover text-white w-14 h-14 rounded-full shadow-lg cursor-pointer"
        onClick={() => {
          const colors = ["yellow", "green", "blue", "pink"];
          const paperStyles = ["style1", "style2"];
          const randomColor = colors[Math.floor(Math.random() * colors.length)];
          const randomPaperStyle =
            paperStyles[Math.floor(Math.random() * paperStyles.length)];

          setNotes((prev) => [
            ...prev,
            {
              id: Date.now().toString(),
              title: "New note",
              color: randomColor as "yellow" | "green" | "blue" | "pink",
              paperStyle: randomPaperStyle as
                | "style1"
                | "style2"
                | "style3"
                | "style4",
              x: 0,
              y: 0,
            },
          ]);
        }}
      >
        +
      </button>
    </div>
  );
}
