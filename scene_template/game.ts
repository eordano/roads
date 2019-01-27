const model = new Entity()
model.set(new GLTFShape('models/__MODEL__.gltf'))
const transform = new Transform({ position: { x: 0, z: 0, y: 0 } })
transform.rotate(Vector3.Up(), __ROTATION__)
model.set(transform)
engine.addEntity(model)