import { useState, useEffect } from 'react'
import { Layout, Page, Text, List, Code } from '@vercel/examples-ui'
import { Modal } from '@ghopay/ui'
import { matchingTextColor, randomColor } from '@ghopay/utils'

export default function Index() {
  const [bgColor, setBgColor] = useState('')
  const [textColor, setTextColor] = useState('')
  const changeColor = () => {
    const bg = randomColor()
    setBgColor(bg)
    setTextColor(matchingTextColor(bg))
  }

  useEffect(changeColor, [])

  return (
    <Page>
     <Modal>
      hi
     </Modal>
    </Page>
  )
}

Index.Layout = Layout
