// ** Menu Components Imports
import HorizontalNavMenuLink from './HorizontalNavMenuLink'
import HorizontalNavMenuGroup from './HorizontalNavMenuGroup'
import { resolveHorizontalNavMenuItemComponent as resolveNavItemComponent } from '@layouts/utils'
import { useLocation } from 'react-router-dom'
import { useEffect } from 'react'

const HorizontalNavMenuItems = props => {
  // ** Components Object
  const Components = {
    HorizontalNavMenuGroup,
    HorizontalNavMenuLink
  }

  // ** Check pathname
  const { pathname } = useLocation();
  useEffect(() => {
    const url = pathname.substring(1)
    const listUrl = props.items.map(i => i.id)
    if (!listUrl.includes(url)) {
      props.setActiveItem(null)
    }
  }, [pathname])

  // ** Render Nav Items
  const RenderNavItems = props.items.map((item, index) => {
    const TagName = Components[resolveNavItemComponent(item)]

    return <TagName item={item} index={index} key={item.id} {...props} />
  })

  return RenderNavItems
}

export default HorizontalNavMenuItems
