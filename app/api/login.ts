// app/api/login/route.ts

import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const users = [
    { username: "admin", password: bcrypt.hashSync("password", 10) }, // Пример пользователя
];

export async function POST(req: NextRequest) {
    const { username, password } = await req.json();

    const user = users.find((user) => user.username === username);
    if (!user) {
        return NextResponse.json(
            { message: "Invalid credentials" },
            { status: 401 }
        );
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
        return NextResponse.json(
            { message: "Invalid credentials" },
            { status: 401 }
        );
    }

    const token = jwt.sign({ username: user.username }, "your-secret-key", {
        expiresIn: "1h",
    });
    return NextResponse.json({ token }, { status: 200 });
}
