"use client";
import React from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
} from "@nextui-org/table";
import { Avatar } from "@nextui-org/avatar";
import { Pagination } from "@nextui-org/pagination";
import { Select, SelectItem } from "@nextui-org/select";
import { Spacer } from "@nextui-org/spacer";
import { Input } from "@nextui-org/input";
import { HiSortAscending } from "react-icons/hi";
import { HiSortDescending } from "react-icons/hi";
import { Switch } from "@nextui-org/switch";
import { FaCheck, FaTimes } from "react-icons/fa";
import { Divider } from "@nextui-org/divider";

import { Sort, useFilterUser, useSort, usePagination } from "./hooks";

import { User } from "@/types/user";

const defaultSort: Sort = { asc: true, key: "name" };

export type UserWithIcon = User & {
  background_color: string;
  foreground_color: string;
  initials: string;
};

export function UserTable({
  users,
  total: _total,
}: {
  users: UserWithIcon[];
  total: number;
}) {
  const { filtered, setSearchTerm } = useFilterUser(users);
  const { setSort, sort, sorted } = useSort(filtered, defaultSort);
  const { currentPage, setPage, paginated, totalPages } = usePagination(sorted);

  return (
    <div className="flex flex-col items-stretch  max-w-full shadow-medium bg-content1 border-divider rounded-xl p-4">
      <FilterAndSort
        sort={sort}
        onSortChange={(e) => {
          setSort(e);
        }}
        onTermChange={(e) => setSearchTerm(e)}
      />
      <Spacer y={4} />
      <Divider orientation="horizontal" />
      <Spacer y={4} />
      <div className="flex flex-wrap gap-4  overflow-x-auto overflow-y-visible">
        <TableComponent items={paginated} />
      </div>
      <Spacer y={4} />
      <div className="flex justify-center ">
        <Pagination
          isCompact
          showControls
          showShadow
          color="primary"
          page={currentPage}
          total={totalPages}
          onChange={setPage}
        />
      </div>
    </div>
  );
}
export function TableComponent({ items }: { items: UserWithIcon[] }) {
  return (
    <Table removeWrapper aria-label="Outros usuários" className=" h-full pb-2 ">
      <TableHeader>
        <TableColumn align="start" className="text-md ">
          Usuário
        </TableColumn>
        <TableColumn align="start" className="text-md">
          Criado em
        </TableColumn>
        <TableColumn align="start" className="text-md  ">
          {"Ult. atua."}
        </TableColumn>
        <TableColumn align="start" className="text-md">
          Verificado
        </TableColumn>
      </TableHeader>
      <TableBody emptyContent={"Nenhum usuário encontrado"} items={items}>
        {(item) => {
          const initials = item.initials;
          const hexColor = item.background_color;
          const textColor = item.foreground_color;

          return (
            <TableRow key={item.id} className="">
              <TableCell className="flex ">
                <Avatar
                  name={initials}
                  style={{ backgroundColor: hexColor, color: textColor }}
                />
                <Spacer x={2} />
                <div className="flex flex-col">
                  <p className="text-md capitalize ">{item.name}</p>
                  <p className="text-sm text-foreground-500 text-ellipsis overflow-visible">
                    {item.email}
                  </p>
                </div>
              </TableCell>
              <TableCell className="text-center">
                <p>{new Date(item.created_at).toLocaleDateString("pt-br")}</p>
                <p className=" text-foreground-500">
                  {new Date(item.created_at).toLocaleTimeString("pt-br")}
                </p>
              </TableCell>
              <TableCell className="text-center">
                <p>{new Date(item.updated_at).toLocaleDateString("pt-br")}</p>
                <p className=" text-foreground-500">
                  {new Date(item.updated_at).toLocaleTimeString("pt-br")}
                </p>
              </TableCell>
              <TableCell>
                <div className="flex justify-center">
                  {item.email_verified_at ? (
                    <FaCheck
                      className="bg-success text-white self-center p-1 rounded-md"
                      size={25}
                    />
                  ) : (
                    <FaTimes
                      className="bg-danger text-white self-center p-1 rounded-md"
                      size={25}
                    />
                  )}
                </div>
              </TableCell>
            </TableRow>
          );
        }}
      </TableBody>
    </Table>
  );
}

export function FilterAndSort({
  sort,
  onTermChange,
  onSortChange,
}: {
  sort: Sort;
  onTermChange: (term: string) => void;
  onSortChange: (sort: Sort) => void;
}) {
  return (
    <div className="flex flex-wrap gap-4 ">
      <Input
        className="flex-1  min-w-48 "
        fullWidth={false}
        label="Nome"
        onChange={(e) => {
          onTermChange(e.target.value);
        }}
      />

      <Select
        className="flex-1 min-w-48"
        fullWidth={false}
        label="Ordenar por"
        selectedKeys={[sort.key]}
        onChange={(e) => {
          onSortChange({
            ...sort,
            key: e.target.value as keyof Pick<
              User,
              "name" | "created_at" | "updated_at"
            >,
          });
        }}
      >
        <SelectItem key={"name"}>Nome</SelectItem>
        <SelectItem key={"created_at"}>Data criação</SelectItem>
        <SelectItem key={"updated_at"}>Ultima atualização</SelectItem>
      </Select>

      <Switch
        defaultSelected
        color="default"
        endContent={<HiSortDescending />}
        size="lg"
        startContent={<HiSortAscending />}
        onChange={(e) => {
          onSortChange({ ...sort, asc: e.target.checked });
        }}
      >
        {sort.asc ? "Asc" : "Desc"}
      </Switch>
    </div>
  );
}
