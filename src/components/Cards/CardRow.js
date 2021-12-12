import React from "react";

export default function CardRow({
     color,
    customerp,
    idNum,
    name,
    phoneNumber,
    email,
    lastDate,
    address,
    userStatus
}) {
    if (customerp.status === userStatus) {
        return (

            <tr>
                {/*console.log("Customer in table")*/}
                {/*console.log(customerp)*/}
                <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center">
                    <span
                        className={
                            "ml-3 font-bold " +
                            +(color === "light" ? "text-blueGray-600" : "text-white")
                        }
                    >
                    {idNum}
                  </span>
                </th>

                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                    {name}
                </td>

                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                    {phoneNumber}
                </td>

                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                    {email}
                </td>

                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                    {lastDate}
                </td>

                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                    {address}
                </td>

            </tr>

        )
    }
    else {
        return (
            <></>
        )
    }
}

CardRow.defaultProps = {
    color: "light",
    title: "",
}

