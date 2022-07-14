import React from 'react'
import { useAppStyles } from '../styles/useAppStyles'

interface SelectButtonProps {
  selected: boolean;
  onClick: () => void;
  children: React.ReactNode;
}

const SelectButton:React.FC<SelectButtonProps> = ({
  children,
  onClick,
  selected
}) => {
  const styles = useAppStyles();

  return (
    <span
      className={styles.selectbutton}
      style={{
        backgroundColor: selected ? "gold" : "",
        color: selected ? "black" : "",
        fontWeight: selected ? 700 : 500,
      }}
      onClick={onClick}
    >
      {children}
    </span>
  )
}

export default SelectButton