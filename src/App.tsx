import { useState } from "react";
import { Sidebar } from "@components/Sidebar";
import type { Note } from "@types";
import Canvas from "@components/Canvas";

export default function App() {
  const [notes, setNotes] = useState<Note[]>([
    {
      id: "1",
      content: "My first note",
      color: "yellow",
      x: 300,
      y: 100,
    },
  ]);

  const [activeId, setActiveId] = useState<string | null>(null);

  const updateNotePosition = (id: string, x: number, y: number) => {
    setNotes((prev) =>
      prev.map((note) => (note.id === id ? { ...note, x, y } : note)),
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
        updateNotePosition={updateNotePosition}
      />

      {/* Add Button */}
      <button
        className="fixed bottom-5 right-5 bg-accent hover:bg-accent-hover text-white w-14 h-14 rounded-full shadow-lg cursor-pointer"
        onClick={() => {
          const colors = ["yellow", "green", "blue", "pink"];
          const randomColor = colors[Math.floor(Math.random() * colors.length)];

          setNotes((prev) => [
            ...prev,
            {
              id: Date.now().toString(),
              content: "New note",
              color: randomColor as "yellow" | "green" | "blue" | "pink",
              x: 200,
              y: 200,
            },
          ]);
        }}
      >
        +
      </button>
    </div>
  );
}
