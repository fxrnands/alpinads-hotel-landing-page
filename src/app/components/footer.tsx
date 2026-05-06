export function Footer() {
  return (
    <footer id="contact" className="border-t bg-background">
      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-12 md:grid-cols-3">
        <div>
          <div className="mb-2 tracking-[0.3em]">AZURE BAY</div>
          <p className="text-muted-foreground">
            Via Marina Grande 12, 84010 Praiano, Amalfi Coast, Italy
          </p>
        </div>
        <div>
          <div className="mb-2">Contact</div>
          <p className="text-muted-foreground">reservations@azurebay.it</p>
          <p className="text-muted-foreground">+39 089 555 0142</p>
        </div>
        <div>
          <div className="mb-2">Open</div>
          <p className="text-muted-foreground">April – October</p>
          <p className="text-muted-foreground">24-hour concierge</p>
        </div>
      </div>
      <div className="border-t py-4 text-center text-muted-foreground">
        © 2026 Azure Bay Resort
      </div>
    </footer>
  );
}
