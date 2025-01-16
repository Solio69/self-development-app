import { Modal as AntModal } from 'antd'

interface IProps {
  isOpen: boolean
  onConfirm: () => void
  onCancel: () => void
  modalText?: string
  modalTitle?: string
  confirmButtonText?: string
  cancelButtonText?: string
}

const ModalConfirm = ({
  isOpen,
  onConfirm,
  onCancel,
  modalTitle,
  modalText,
  confirmButtonText,
  cancelButtonText,
}: IProps) => {
  return (
    <AntModal
      title={modalTitle}
      open={isOpen}
      onOk={() => onConfirm()}
      onCancel={() => onCancel()}
      okText={confirmButtonText}
      cancelText={cancelButtonText}
    >
      <p>{modalText}</p>
    </AntModal>
  )
}

export default ModalConfirm
