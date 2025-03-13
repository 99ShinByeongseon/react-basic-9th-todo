import React, { PropsWithChildren } from "react";

const DetailLayout = ({ children }: PropsWithChildren) => {
  return (
  <div>
    <h1>DetailLayout</h1>
    {children}
    </div>
  );
};

export default DetailLayout;
