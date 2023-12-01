import { Badge } from "react-bootstrap";

export default function TagBadge(data) {
    let tags = data.data;

    return (
        <>
            {tags.map((tag, index) => (
                <Badge key={tag} bg="secondary">
                    {tags[index]}
                </Badge>
            ))}
        </>
    );
}