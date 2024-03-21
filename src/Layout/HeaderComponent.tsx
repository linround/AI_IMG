import layoutCss from './layout.module.less'
export function HeaderComponent() {
  return (
    <div className={layoutCss.headerContainer}>
      <h1>AI IMG</h1>
    </div>
  )
}
