# HTML Element Angle

HTML�v�f�̊p�x�����߂�֐��B

A function to find the angle of an HTML element.

### �f�� (Demo)

https://wolfeign.github.io/ElementAngle/

���ꂼ��̊p�x�͎��s���Ɍv�Z���Ă���B

Each angle is calculated at runtime.

### �g�p���@ (Usage)

�֐��͈ȉ���2��
�EgetElementAngleByRadian(element, win)
�EgetElementAngleByDegree(element, win)

������element�͗v�f�Awin�͒ʏ��window�I�u�W�F�N�g�ŏȗ��\�B
�Ԃ�l�͏オ�ʓx�ŉ����x���B�G���[���N�����null��Ԃ��B

The following two types of functions.
�EgetElementAngleByRadian(element, win)
�EgetElementAngleByDegree(element, win)

The argument element is an element and win is usually a window object and can be omitted.
The return value is radians on the top and degrees on the bottom. Returns null if an error occurs.

### ���m�̖�� (Known Issues)

���̂Ƃ���Ȃ�

None for now.

### ��� (Author)

Wolfeign(@wolfeign)

### ���C�Z���X (License)

The MIT License (MIT)