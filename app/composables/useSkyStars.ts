import type { Ref } from 'vue'

function createCircleTexture(color: string, size: number) {
  const canvas = document.createElement('canvas')
  canvas.width = canvas.height = size
  const ctx = canvas.getContext('2d')
  if (!ctx) return null

  const center = size / 2
  ctx.beginPath()
  ctx.arc(center, center, size / 2, 0, Math.PI * 2, false)
  ctx.closePath()
  ctx.fillStyle = color
  ctx.fill()

  return canvas
}

export function useSkyStars(containerRef: Ref<HTMLElement | null>) {
  let dispose: (() => void) | undefined

  onMounted(async () => {
    if (!import.meta.client || !containerRef.value) return

    let THREE: typeof import('three')
    try {
      THREE = await import('three')
    } catch {
      return
    }

    const container = containerRef.value
    const width = window.innerWidth
    const height = window.innerHeight
    const aspect = width / height

    const scene = new THREE.Scene()
    scene.background = new THREE.Color(0x111111)

    const camera = new THREE.PerspectiveCamera(75, aspect, 0.1, 1000)
    camera.position.z = 32

    const positions = new Float32Array(10_000 * 3)
    for (let i = 0; i < 10_000; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 1900
      positions[i * 3 + 1] = (Math.random() - 0.5) * 1900
      positions[i * 3 + 2] = (Math.random() - 0.5) * 2600 + 64
    }

    const geometry = new THREE.BufferGeometry()
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))

    const textureCanvas = createCircleTexture('#ffffff', 32)
    const texture = textureCanvas ? new THREE.CanvasTexture(textureCanvas) : null

    const material = new THREE.PointsMaterial({
      color: 0xffffff,
      size: 1,
      transparent: true,
      opacity: 0.7,
      sizeAttenuation: true,
      map: texture ?? undefined,
    })

    const starField = new THREE.Points(geometry, material)
    scene.add(starField)

    const renderer = new THREE.WebGLRenderer({ antialias: window.devicePixelRatio <= 1 })
    renderer.setPixelRatio(window.devicePixelRatio || 1)
    renderer.setSize(width, height)
    renderer.domElement.className =
      'globalCanvas pointer-events-none absolute inset-0 z-[1] block h-full w-full'
    container.prepend(renderer.domElement)

    let frameId = 0
    const animate = () => {
      starField.rotation.x -= 0.00015
      starField.rotation.y -= 0.00015
      renderer.render(scene, camera)
      frameId = window.requestAnimationFrame(animate)
    }
    animate()

    dispose = () => {
      window.cancelAnimationFrame(frameId)
      renderer.domElement.remove()
      geometry.dispose()
      material.dispose()
      texture?.dispose()
      renderer.dispose()
    }
  })

  onBeforeUnmount(() => {
    dispose?.()
  })
}
