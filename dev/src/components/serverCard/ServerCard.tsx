import Image from 'next/image'
// eslint-disable-next-line no-unused-vars
import React, { ReactNode } from 'react'

type cardParameterType = {
  children?: any
  title?: string
  cardWith?: number
  cardHeight?: number
  description?: string
  logoURL?: string
  logoSize?: number
  logoColor?: string
  bannerURL?: string
  bannerColor?: string
  bannerHeight?: number
  className?: ReactNode
}

export function ServerCard({
  children,
  className,
  title,
  description,
  cardWith = 280,
  cardHeight = 320,
  logoURL,
  logoColor = '#272935',
  logoSize = 96,
  bannerURL,
  bannerColor = '#21222C',
  bannerHeight = 120
}: cardParameterType) {
  return (
    <div
      className={`serverCard select-none cursor-pointer card bg-base-100 border border-base-200 flex flex-col rounded-lg overflow-hidden shadow-xl ${className}`}
      style={{
        width: cardWith,
        height: cardHeight
      }}
    >
      <div
        className='w-full absolute grid place-content-center'
        style={{ height: bannerHeight * 2 }}
      >
        <Image
          quality={100}
          src={logoURL ?? ''}
          width={logoSize}
          height={logoSize}
          draggable={false}
          className='rounded-full p-1'
          style={{
            width: logoSize,
            height: logoSize,
            backgroundColor: logoColor,
            lineHeight: logoSize,
            textAlign: 'center'
          }}
          alt='' // No alt-text so that screen readers dont perceive this as an image
        />
      </div>
      {bannerURL !== undefined ? (
        <Image
          quality={100}
          src={bannerURL}
          width={cardWith}
          height={bannerHeight}
          draggable={false}
          className='w-full object-cover'
          style={{
            height: bannerHeight,
            backgroundColor: bannerColor
          }}
          alt='' // No alt-text so that screen readers dont perceive this as an image
        />
      ) : (
        <div
          className='w-full bg-base-200'
          style={{
            height: bannerHeight,
            backgroundColor: bannerColor
          }}
        />
      )}
      <div
        className='card-body gap-0 w-full p-0 px-3 pb-3'
        style={{ marginTop: logoSize / 2 }}
      >
        <h2 className='text-base font-bold'>{title}</h2>
        <p className='text-sm'>{description}</p>
        {children}
      </div>
    </div>
  )
}
