import { Divider } from "@nextui-org/divider";
import { Spacer } from "@nextui-org/spacer";

import { UserTable, type UserWithIcon } from "@/components/users/table";
import { UserInfoCard } from "@/components/users/user-card";
import { authorizedFetchSSR } from "@/config/axios";
import { type UserRequest } from "@/types/user";
import {
  getContrastColor,
  getInitials,
  mockVerificationDate,
  stringToHexColor,
} from "@/components/users/utils";

export default async function Dashboard() {
  const api = await authorizedFetchSSR();
  const { data } = await api.get<UserRequest>("/dashboard");

  const usersWithIcon: UserWithIcon[] = data.users.map((item) => {
    const background_color = stringToHexColor(item.name);
    const foreground_color = getContrastColor(background_color);
    const email_verified_at = mockVerificationDate(item.created_at, 0.3);
    const initials = getInitials(item.name);

    return {
      ...item,
      email_verified_at,
      background_color,
      foreground_color,
      initials,
    };
  });

  return (
    <div className="flex-col flex items-stretch max-w-[100vw]  w-[640px] py-4 px-0 xs:px-4 ">
      <h1 className="text-2xl font-semibold px-4 sm:px-0">
        Minhas informações
      </h1>
      <Spacer y={4} />
      <UserInfoCard
        user={{
          ...data.logged_user,
          email_verified_at: mockVerificationDate(
            data.logged_user.created_at,
            0.5
          ),
        }}
      />

      <Spacer y={4} />
      <Divider orientation="horizontal" />
      <Spacer y={4} />
      <h1 className="text-2xl font-semibold px-4 sm:px-0"> Outros usuários</h1>
      <Spacer y={4} />

      <UserTable total={data.number_users} users={usersWithIcon} />
    </div>
  );
}
