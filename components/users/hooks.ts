import { useDebounce } from "@uidotdev/usehooks";
import { useState, useEffect, useMemo } from "react";

import { type User } from "@/types/user";

//TODO REFACTOR SORT , PAGINATION AND FILTER  AS SERVER SIDE FUNCTIONS

function sortUsers<T extends User>(users: T[], sort: Sort) {
  const temp = [...users];

  return temp.sort((a, b) => {
    if (a[sort.key] < b[sort.key]) {
      return sort.asc ? -1 : 1;
    }

    return sort.asc ? 1 : -1;
  });
}

export function useFilterUser<T extends User>(source: T[]) {
  const [filtered, setFiltered] = useState<T[]>(source);
  const [searchTerm, setSearchTerm] = useState<string>("");

  const debouncedSearch = useDebounce(searchTerm, 300);

  useEffect(() => {
    setFiltered(
      source.filter((item) => {
        return item.name
          .toLocaleLowerCase()
          .includes(searchTerm.toLocaleLowerCase());
      }),
    );
  }, [debouncedSearch]);

  return { setSearchTerm, filtered };
}

export function useSort<T extends User>(source: T[], defaultSort: Sort) {
  const [sorted, setSorted] = useState<T[]>(sortUsers(source, defaultSort));
  const [sort, setSort] = useState<Sort>(defaultSort);

  useEffect(() => {
    setSorted(sortUsers(source, sort));
  }, [source, sort]);

  return { sort, setSort, sorted };
}

export function usePagination<T extends User>(source: T[]) {
  const rowsPerPage = 5;
  const [currentPage, setPage] = useState<number>(1);

  const totalPages = Math.ceil(source.length / rowsPerPage);

  useEffect(() => {
    setPage(1);
  }, [source]);

  const paginated = useMemo(() => {
    const start = (currentPage - 1) * rowsPerPage;
    const end = start + rowsPerPage;

    return source.slice(start, end);
  }, [currentPage, source]);

  return { currentPage, totalPages, setPage, paginated };
}

export type Sort = {
  key: keyof Pick<User, "name" | "created_at" | "updated_at" | "email">;
  asc: boolean;
};
