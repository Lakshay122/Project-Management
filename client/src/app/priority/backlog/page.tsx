import React from "react";
import ReuseablePriorityPage from "../resuseablePriorityPage";
import { Priority } from "@/state/api";

const Urgent = () => {
  return <ReuseablePriorityPage priority={Priority.Backlog} />;
};

export default Urgent;
