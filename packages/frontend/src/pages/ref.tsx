import { Button } from '@/components/ui/button';
import {
  Drawer,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer';

export const RefPage = () => {
  return (
    <div className="flex flex-col gap-4 items-start">
      <h2 className="text-3xl font-semibold">Your refs</h2>
      <Drawer>
        <DrawerTrigger className="w-full">
          <Button className="w-full" size={'lg'}>
            Invite friends
          </Button>
        </DrawerTrigger>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>Invite friends</DrawerTitle>
          </DrawerHeader>

          <DrawerFooter>
            <div className="flex flex-col gap-2">
              <Button className="w-full">Invite friends</Button>
              <Button className="w-full" variant="secondary">
                Copy link
              </Button>
            </div>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </div>
  );
};
