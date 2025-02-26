import { useQuery } from "@tanstack/react-query";
import { FileCheck, LaptopMinimal, Video } from "lucide-react";
import { Link, useSearchParams } from "react-router";
import styled from "styled-components";
import { getTodos } from "../../api/todo-api";

const TodoDashboard = () => {
  const [searchParams] = useSearchParams();
  const selectedFilter = searchParams.get("filter");

  const { data: all } = useQuery({
    queryKey: ["todos"],
    queryfn: () => getTodos(),
  });


  const all = getfilteredTodos().length;
  const completed = getfilteredTodos("completed").length;
  const pending = all - completed;
  
  return (
    <TodoDashboardSection>
      <TodoDashboardHeader>Quick Access</TodoDashboardHeader>

      <TodoDashboardCardList>
        <TodoDashboardCardWrapper $flex={2}>
          <TodoDashboardCard to="/" $selected={selectedFilter}>
            <div>
              <FileCheck />
            </div>
            <TodoDashboardCardContent>
              {all} <br /> <span>All Tasks</span>
            </TodoDashboardCardContent>
          </TodoDashboardCard>
        </TodoDashboardCardWrapper>
        <TodoDashboardCardWrapper>
          <TodoDashboardCard 
          to="/?filter=completed"
          $bgColor="#582be6"
          $selected={selectedFilter === "completed"}
          >
            <div>
              <LaptopMinimal />
            </div>
            <TodoDashboardCardContent>
              {completed} <br /> <span>Completed Tasks</span>
            </TodoDashboardCardContent>
          </TodoDashboardCard>
          </TodoDashboardCardWrapper>
        <TodoDashboardCardWrapper>
          <TodoDashboardCard 
          to="/?filter=pending"
          $bgColor="#242424"
          $selected={selectedFilter === "pending"}
          >
            <div>
                <Video />
            </div>
            <TodoDashboardCardContent>
              {pending} <br /> <span>Pending Tasks</span>
            </TodoDashboardCardContent>
          </TodoDashboardCard>
        </TodoDashboardCardWrapper>
      </TodoDashboardCardList>
    </TodoDashboardSection>
  );
};

const TodoDashboardSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const TodoDashboardHeader = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
`;

const TodoDashboardCardList = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 1rem;
`;

const TodoDashboardCardWrapper = styled.li`
    flex: ${({ $flex = 1 }) => $flex};
`;

const TodoDashboardCard = styled(Link)`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 184px;
  background-color: ${({$bgColor = 'rgb(230, 88, 43)'}) => $bgColor};
  justify-content: space-between;
  color: white;
  padding: 1.25rem;
  border-radius: 1rem;
  cursor: pointer;
  text-decoration: ${({ $selected }) => $selected ? 'underline' : 'none'};
`;

const TodoDashboardCardContent = styled.p`
  font-size: 1.25rem;
  font-weight: 600;

  span {
    font-size: 1rem;
    font-weight: 400;
  }
`;

export default TodoDashboard;
