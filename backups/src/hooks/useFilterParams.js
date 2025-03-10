import { useSearchParams } from "react-router";

export const useFilterParams = () => {
    const [searchParams] = useSearchParams();
    const selectedFilter = searchParams.get("filter");

    return selectedFilter;
};