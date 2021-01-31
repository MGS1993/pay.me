import React, { useState } from 'react'
import styles from './InputForm.module.css';
import Input from '../../Input/Input';

const InputForm = props => {
  const [itemName, setItemName] = useState('')
  const [expense, setExpense] = useState(0)
  const [tipPercentage, setTipPercentage] = useState(0)
  const [splitBy, setSplitBy] = useState(0)
  const [reminderFreq, setReminderFreq] = useState(0)

  const handleFormSubmit = e => {
    e.preventDefault();
    let dataBody 
    let calcExp
    let calcSplit
    if(tipPercentage === 0 && splitBy > 0) {
      // let calcTip = tipPercentage / 100
      // let totalTip = calcTip * expense
      // calcExp = +totalTip + +expense
      calcSplit = +expense * +splitBy / 100 
      dataBody = {
        itemName,
        expense: expense ,
        reminderFreq,
        payMe: calcSplit
      }
    }
    if(tipPercentage > 0 && splitBy > 0) {
      let calcTip = tipPercentage / 100
      let totalTip = calcTip * expense
      
      calcExp = +totalTip + +expense
      calcSplit = +calcExp * +splitBy / 100 
      dataBody = {
        itemName,
        expense: calcExp ,
        reminderFreq,
        payMe: calcExp - (+calcExp - +calcSplit)
      }
      
    }
    
    // fetch('api/add-expense', {
    //   method: 'POST',
    //   body: JSON.stringify(dataBody),
    //   headers: {
    //     'Content-Type': 'application/json'
    //   },
    // })
    console.log(dataBody)
  }
  return(
    <React.Fragment>                      
      <form className={styles.form} onSubmit={handleFormSubmit}>
      <Input
      labelName='Item Name'
      inputType='text'
      inputName='Item-Name'
      value={itemName}
      changed={e => setItemName(e.target.value)} />
      <Input
      labelName='Expense to split'
      inputType='number'
      inputName= 'Expense-to-split'
      value={expense}
      changed={e => setExpense(e.target.value)}/>
      <Input
      labelName='Tip percentage'
      inputType='number'
      inputName='Tip-percentage'
      value={tipPercentage}
      changed={e => setTipPercentage(e.target.value)}/>
      <Input
      labelName="Percent split"
      inputType='number'
      inputName='Split-by'
      value={splitBy}
      changed={e => setSplitBy(e.target.value)}/>
      <Input 
      labelName="Weekly reminders"
      inputType='range'
      inputName='Reminder-range'
      min='1'
      max='7'
      value={reminderFreq}
      changed={e => setReminderFreq(e.target.value)}
      sliderVal={reminderFreq}/>
      <Input 
      inputType='submit'
      value='Submit'/>
      </form>
    </React.Fragment>
  )
}

export default InputForm