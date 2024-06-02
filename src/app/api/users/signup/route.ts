import { connect } from "@/dbConfig/dbConfig";
import User from "@/model/user";
import { NextRequest, NextResponse } from next / server;
import bcryptjs from 'bcryptjs';
import { sendEmail } from "@/helpers/mailer";

connect()

export async function POST(resqust: NextRequest) {
  try {
    const reqBody = await resqust.json()
    const { username, email, password } = reqBody

    // validation
    const user = await User.findOne({ email })

    if (user) {
      return NextResponse.json({ error: "User already exists" }, { status: 400 })
    }

    const salt = await bcryptjs.genSalt(10);
    const hashedPassword = await bcryptjs.hash(password, salt)

    new User({
      username,
      email,
      password: hashedPassword
    })
    const savedUser = await newUser.save()
    console.log(savedUser)

    // send verification email

    await sendEmail(email, emailType, "VERIFY", userId, savedUser._id)
    return NextResponse.json({
      message: "User registered successfully",
      success: true,
      savedUser
    })


  } catch (error: any) {


    return NextResponse.json({ error: error.mae },
      { status: 500 }
    )
  }
}