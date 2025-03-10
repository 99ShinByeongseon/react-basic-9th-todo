import { useSearchParams } from "react-router";
import { TodoFilter } from "../api/todo-api";

export const useFilterParams = () => {
    const [searchParams] = useSearchParams();
    const selectedFilter = searchParams.get("filter") as TodoFilter | undefined;

    return selectedFilter;
};