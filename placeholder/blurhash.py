import blurhash
import PIL.Image
import numpy

PIL.Image.open("image.jpg")

blurhash.encode(numpy.array(PIL.Image.open("cool_cat_small.jpg").convert("RGB")))
# Result: 'UBL_:rOpGG-oBUNG,qRj2so|=eE1w^n4S5NH'

PIL.Image.fromarray(numpy.array(blurhash.decode('UBL_:rOpGG-oBUNG,qRj2so|=eE1w^n4S5NH', 128, 128)).astype('uint8'))
# Result: