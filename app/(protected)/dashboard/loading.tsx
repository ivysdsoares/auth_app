import { Divider } from "@nextui-org/divider";
import { Spacer } from "@nextui-org/spacer";

export default function Loading() {
  return (
    <div className="flex-col flex items-stretch max-w-[100vw] w-[640px] p-4 ">
      <p
        aria-hidden
        className="animate-pulse rounded-xl bg-content2 h-12 w-44"
      />
      <Spacer y={4} />
      <div aria-hidden className="animate-pulse rounded-xl bg-content2  h-36" />

      <Spacer y={4} />
      <Divider orientation="horizontal" />
      <Spacer y={4} />
      <p
        aria-hidden
        className="animate-pulse rounded-xl bg-content2 h-12 w-44"
      />
      <Spacer y={4} />
      <div aria-hidden className="animate-pulse rounded-xl bg-content2  h-44" />
    </div>
  );
}
