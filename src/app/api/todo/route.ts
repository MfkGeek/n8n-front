import { NextResponse } from 'next/server';
import todoData from '@/data/todoList.json';

export async function GET() {
  return NextResponse.json(todoData);
}