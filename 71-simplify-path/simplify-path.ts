function simplifyPath(path: string): string {
    const parts = path.split("/"), stack = [];

    for(const part of parts){
        if(part === ".."){
            if(stack.length > 0) stack.pop();
        } else if(part !== "." && part !== "") stack.push(part)
    }

    return "/" + stack.join("/")
};