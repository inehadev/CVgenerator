import { NextResponse } from 'next/server';  

const CV = require('../../../models/cvModel');
const dbConnect = require('../../../models/cvModel')


export async function GET(req, context) {
    const { id } = await context.params;

    try {
        await dbConnect();

        const cv = await CV.findOne({ _id: id });

        if (!cv) {
            return new Response("CV not found", { status: 404 });
        }

        return new Response(JSON.stringify(cv), { status: 200 });
    } catch (error) {
        console.error(error);
        return new Response("Error retrieving CV", { status: 500 });
    }
}