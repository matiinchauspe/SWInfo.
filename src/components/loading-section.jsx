import { Icons } from "@/components/ui/icons";
import { Paragraph } from "@/components/ui/paragraph";
import { Text } from "@/components/ui/text";

const LoadingSection = () => (
  <div className="flex flex-col justify-center items-center h-48">
    <Paragraph className="flex gap-2 items-center">
      <Text color="tertiary">Loading...</Text>
      <Icons.Loader className="h-10 w-10 animate-spin" />
    </Paragraph>
  </div>
);

export { LoadingSection };
