import { Box, Text, Button } from '@skynexui/components'
import { getRouteMatcher } from 'next/dist/shared/lib/router/utils'
import appConfig from '../config.json'

function Title(props) {
  const Tag = props.tag || 'h1'
  return (
    <>
      <Tag>{props.children}</Tag>
      <style jsx>{`
        ${Tag} {
          color: ${appConfig.theme.colors.neutrals['050']};
          font-size: 24px;
          font-weight: 600;
        }
      `}</style>
    </>
  )
}

export default function PaginaNotFound() {
  return (
    <>
      <Box
        styleSheet={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: appConfig.theme.colors.primary[500],
          backgroundImage:
            'url(https://virtualbackgrounds.site/wp-content/uploads/2020/07/futuristic-office-1536x864.jpg)',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundBlendMode: 'multiply',
          transform: 'rotate(180deg)',
        }}
      >
        <Box
          styleSheet={{
            display: 'block',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexDirection: {
              xs: 'column',
              sm: 'row'
            },
            width: '100%',
            maxWidth: '700px',
            borderRadius: '5px',
            padding: '32px',
            margin: '16px',
            boxShadow: '0 2px 10px 0 rgb(0 0 0 / 20%)',
            backgroundColor: appConfig.theme.colors.neutrals[800]
          }}
        >
          <Button
              type="button"
              label="Ir para a home"
              fullWidth
              buttonColors={{
                contrastColor: appConfig.theme.colors.neutrals['000'],
                mainColor: appConfig.theme.colors.primary[500],
                mainColorLight: appConfig.theme.colors.primary[400],
                mainColorStrong: appConfig.theme.colors.primary[600]
              }}
              styleSheet={{
                transform: 'rotate(180deg)'
              }}
              href='/'
            />
          <Text
            variant="heading1"
            styleSheet={{
              marginBottom: '32px',
              color: appConfig.theme.colors.neutrals[300]
            }}
          >
            404 not found
          </Text>
          <Text
            variant="body1"
            styleSheet={{
              marginBottom: '32px',
              color: appConfig.theme.colors.neutrals[400]
            }}
          >
            <p>A página que você estava procurando não foi encontrada.</p>
          </Text>
        </Box>
      </Box>
    </>
  )
}
