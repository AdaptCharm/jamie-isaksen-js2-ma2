import { FC, useState, useRef, useCallback } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import cn from 'classnames'

import { useResize } from '@lib/hooks'

import { ThemeWidget } from '@components/misc'
import { Element, Container } from '@components/ui'

const ActiveLink: FC<{ cta: string | React.ReactNode; children: any }> = ({
  cta,
  children,
}) => {
  const { pathname } = useRouter()
  const divRef = useRef<HTMLDivElement>(null)
  const [rect, setRect] = useState({ width: 0, left: 0 })

  const updateWidth = useCallback(() => {
    if (divRef.current) {
      const { offsetWidth, offsetLeft } = divRef.current
      setRect({ width: offsetWidth, left: offsetLeft })
    }
  }, [])

  useResize(updateWidth)

  return (
    <div className='group'>
      <div
        className={cn(
          'absolute opacity-0 transition-2 group-hover:opacity-100 z-[-1] bottom-[11px] left-0 h-[32px] rounded bg-accents-2 dark:bg-accents-7'
        )}
        style={{
          width: rect.width,
          transform: `translateX(${rect.left}px)`,
        }}
      />

      <div className='relative' ref={divRef}>
        {typeof cta === 'string' ? (
          <Link href={cta}>
            <a
              className={cn(
                'inline-flex text-sm py-4 px-3 hover:text-black dark:hover:text-white transition-colors duration-200 focus:outline-none before:block before:absolute before:h-0 before:inset-x-[9px] before:bottom-0 before:border-2 before:border-t-0 before:border-r-0 before:border-l-0',
                {
                  'before:border-black dark:before:border-white text-black dark:text-white':
                    pathname.split('/')[1] === cta.split('/')[1],
                  'before:border-transparent text-accents-5 dark:text-accents-4':
                    pathname.split('/')[1] !== cta.split('/')[1],
                }
              )}
            >
              {children}
            </a>
          </Link>
        ) : (
          <div
            className={cn(
              'inline-flex w-[44px] text-sm text-accents-5 dark:text-accents-4 hover:text-black dark:hover:text-white transition-colors duration-200 focus:outline-none'
            )}
          >
            {children}
          </div>
        )}
      </div>
    </div>
  )
}

interface Page {
  name: string
  cta: string | React.ReactNode
}

const pages: Page[] = [
  {
    name: 'Home',
    cta: '/',
  },
  {
    name: 'Theme',
    cta: <ThemeWidget />,
  },
]

const _Navbar: FC = () => {
  const [isShown, setIsShown] = useState(false)

  return (
    <Element clean={true} className='z-10'>
      <Container>
        <div className='flex items-center justify-between h-16'>
          <div className='flex'>
            <span className='sm:hidden'>JS2 MA2</span>
            <span className='hidden sm:block'>
              The MA2 submission for Javascript 2.
            </span>
          </div>
          <div className='mt-3 flex sm:space-x-0.5'>
            {pages.map((page) => (
              <ActiveLink cta={page.cta} key={page.name}>
                {typeof page.cta === 'string' ? page.name : page.cta}
              </ActiveLink>
            ))}
          </div>
        </div>
      </Container>
    </Element>
  )
}

export default _Navbar
