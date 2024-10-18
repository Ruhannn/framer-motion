import Button from "../components/ui/button";

export default function Gestures() {
  return (
    <div className="grid gap-2 place-items-center">
      <Button
        whileTap={{
          scale: 0.95,
          rotate: "2.5deg",
        }}
        whileHover={{
          scale: 1.15,
        }}
      >
        hello
      </Button>
    </div>
  );
}
