import { PanelFieldConfig } from "@/page/App/components/InspectPanel/interface"

export interface HeaderProps {
  title: string
  handleCloseModal: () => void
}

export interface BodyProps {
  childrenSetter: PanelFieldConfig[]
  widgetDisplayName: string
  attrPath: string
}

export interface ModalProps extends HeaderProps, BodyProps {}