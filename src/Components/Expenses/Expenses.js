import React from 'react'
import ExpenseItem from './ExpenseItem'
import './Expenses.css'
import Card from '../UI/Card'

export default function Expenses({expenses}) {
  return (
    <Card className='expenses'>
        <ExpenseItem expense = {expenses[0]} />
        <ExpenseItem expense = {expenses[1]} />
        <ExpenseItem expense = {expenses[2]} />
        <ExpenseItem expense = {expenses[3]} />
    </Card>
  )
}
