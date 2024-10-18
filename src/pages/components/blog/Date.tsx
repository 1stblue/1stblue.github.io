import React from "react";

export default function Date({ date, formattedDate }) {
    return (
        <time dateTime={date} itemProp="datePublished">
            {formattedDate}
        </time>
    );
}
