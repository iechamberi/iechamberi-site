<template>
  <CPseudoBox
    d="flex"
    :h="['sm', 'md', 'lg', 'xl']"
    bg="gray.900"
    :bg-image="`url('${image.media.url}')`"
    bg-size="cover"
    background-repeat="no-repeat"
    pos="relative"
    :_before="before"
  >
    <Container z-index="base">
      <CFlex :h="['sm', 'md', 'lg', 'xl']" justify="center" align="center">
        <CStack :spacing="3" text-align="center">
          <CHeading
            as="h1"
            :font-size="['4xl', '5xl', '6xl']"
            color="white"
            max-w="xl"
            mr="auto"
            ml="auto"
          >
            {{ title }}
          </CHeading>
          <CText color="white" max-w="2xl" :font-size="['md', 'lg', '2xl']">
            {{ text }}
          </CText>
        </CStack>
      </CFlex>
    </Container>
  </CPseudoBox>
</template>

<script>
export default {
  name: 'Hero',
  props: {
    title: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      default: null,
    },
    image: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      before: {
        content: '""',
        bg: 'rgba(0,0,0,0.2)',
        w: 'full',
        h: 'full',
        pos: 'absolute',
        backdropFilter: 'saturate(140%) blur(10px)',
      },
    }
  },
}
</script>
