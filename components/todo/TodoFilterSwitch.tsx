"use client";

import { useId } from "react";
import { Label } from "../ui/label";
import { Switch } from "../ui/switch";

const TodoFilterSwitch = () => {
    const switchId = useId();

    return (
        <div className="flex items-center space-x-2">
            <Switch id={switchId} />
            <Label htmlFor={switchId}>Completed</Label>
        </div>
    );
};

export default TodoFilterSwitch;