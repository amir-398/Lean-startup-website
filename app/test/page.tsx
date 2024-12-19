import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function Test() {
  return (
    <div className="grid gap-4 justify-center">
      <div className="space-y-2">
        <h4 className="font-medium leading-none">Dimensions</h4>
        <p className="text-sm text-muted-foreground">
          Set the dimensions for the layer.
        </p>
      </div>
      <div className="grid gap-2">
        <div className="grid grid-cols-3 items-center gap-4">
          <Label htmlFor="Nom">Nom</Label>
          <Input id="Nom" className="col-span-2 h-8" />
        </div>
        <div className="grid grid-cols-3 items-center gap-4">
          <Label htmlFor="Prénom">Prénom</Label>
          <Input id="Prénom" className="col-span-2 h-8" />
        </div>
        <div className="grid grid-cols-3 items-center gap-4">
          <Label htmlFor="Email">Email</Label>
          <Input id="Email" className="col-span-2 h-8" />
        </div>
        <div className="grid grid-cols-3 items-center gap-4">
          <Label htmlFor="Age">Age</Label>
          <Input id="Age" defaultValue="none" className="col-span-2 h-8" />
        </div>
      </div>
      <div className="flex justify-center">
        <button className="bg-orange rounded-xl font-medium w-1/4 p-2 hover:border-2 hover:border-green">
          Envoyer
        </button>
      </div>
    </div>
  );
}
