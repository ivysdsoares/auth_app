import { FaCheck, FaTimes } from "react-icons/fa";
import { Card, CardBody, CardHeader, CardFooter } from "@nextui-org/card";
import { Avatar } from "@nextui-org/avatar";
import { Spacer } from "@nextui-org/spacer";
import { Divider } from "@nextui-org/divider";

import { getContrastColor, getInitials, stringToHexColor } from "./utils";

import { User } from "@/types/user";

function DisplayDate({ date }: { date: string }) {
  return (
    <div className="flex flex-wrap">
      {"\xa0"}
      <p>{new Date(date).toLocaleDateString("pt-br")}</p>
      {"\xa0-\xa0"}
      <p className="text-foreground-500 font-normal">
        {new Date(date).toLocaleTimeString("pt-br")}
      </p>
    </div>
  );
}
export function UserVerificationStatus({ date }: { date: string | null }) {
  if (date) {
    return (
      <div className="flex items-center justify-between w-full">
        <div className="flex">
          <p className="text-foreground-500">Usuário verificado em:</p>
          <DisplayDate date={date} />
        </div>

        <FaCheck className="bg-success text-white rounded-md  p-1" size={20} />
      </div>
    );
  }

  return (
    <div className="flex items-center justify-between w-full">
      <p className="text-foreground-500">
        Usuário <b className="text-foreground"> não</b>
        {"\xa0verificado"}
      </p>
      <Spacer x={1} />
      <FaTimes className="bg-danger text-white rounded-md" size={20} />
    </div>
  );
}

export function UserInfoCard({ user }: { user: User }) {
  const initials = getInitials(user.name);
  const hexColor = stringToHexColor(user.name);
  const textColor = getContrastColor(hexColor);

  return (
    <Card>
      <CardHeader className="flex gap-3">
        <Avatar
          name={initials}
          style={{ backgroundColor: hexColor, color: textColor }}
        />
        <div className="flex flex-col">
          <p className="text-md capitalize font-semibold">{user.name}</p>
          <p className="text-small text-default-500 ">{user.email}</p>
        </div>
      </CardHeader>
      <Divider />
      <CardBody className="flex-col ">
        <div className="flex flex-wrap">
          <p className="text-foreground-500">Criado em:</p>
          <DisplayDate date={user.created_at} />
        </div>
        <div className="flex flex-wrap">
          <p className="text-foreground-500 ">Última atualização:</p>
          <DisplayDate date={user.updated_at} />
        </div>
      </CardBody>
      <Divider />
      <CardFooter>
        <UserVerificationStatus date={user.email_verified_at} />
      </CardFooter>
    </Card>
  );
}
