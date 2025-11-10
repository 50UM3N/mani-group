import { cn } from "@/lib/utils";
import React from "react";

const Content: React.FC<any> = ({ className, ...rest }) => {
	return <article className={cn("prose max-w-none", className)} {...rest} />;
};

export default Content;
