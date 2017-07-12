'use strict';

$(function () {
    window.webuploaderid = 0;
    // 判断浏览器是否支持webuploader
    if (!WebUploader.Uploader.support()) {
        alert('Web Uploader 不支持您的浏览器！如果你使用的是IE浏览器，请尝试升级 flash 播放器');
        throw new Error('WebUploader does not support the browser you are using.');
    };

    function $webuploader(config) {
        this.pick = config.pick;
        this.fileNumLimit = config.fileNumLimit;
        this.uploadlist = config.uploadlist;
        this.formData = config.formData;
    };
    $webuploader.prototype = {
        init: function init() {
            var upload = this.create();
            this.add(upload);
            this.delete(upload);
            return upload;
        },
        create: function create() {
            var pick = this.pick;
            var fileNumLimit = this.fileNumLimit;
            var formData = this.formData;
            var upload = WebUploader.create({
                // swf文件路径
                swf: '../static/Uploader.swf',

                // 文件接收服务端。
                server: '../upload.php',

                // 选择文件的按钮。可选。
                // 内部根据当前运行是创建，可能是input元素，也可能是flash.
                pick: pick,
                accept: {
                    title: 'Images',
                    extensions: 'gif,jpg,jpeg,bmp,png',
                    mimeTypes: 'image/jpg,image/jpeg,image/png'
                },
                thumb: {
                    width: 78,
                    height: 78,
                    // 图片质量，只有type为`image/jpeg`的时候才有效。
                    quality: 70,
                    // 是否允许放大，如果想要生成小图的时候不失真，此选项应该设置为false.
                    allowMagnify: false,
                    // 是否允许裁剪。
                    crop: true
                },
                fileNumLimit: fileNumLimit,
                formData: formData
            });
            return upload;
        },
        add: function add(upload) {
            var uploadlist = this.uploadlist;
            upload.on('fileQueued', function (file) {
                var $li = $('<div id="' + file.id + '" class="img">' + '<img>' + '<div class="info">' + file.name + '</div>' + '</div>'),
                    $img = $li.find('img');
                // 创建缩略图
                // 如果为非图片文件，可以不用调用此方法。
                // thumbnailWidth x thumbnailHeight 为 100 x 100
                upload.makeThumb(file, function (error, src) {
                    if (error) {
                        $img.replaceWith('<span>不能预览</span>');
                        return;
                    }

                    $img.attr('src', src);
                }, 78, 78);

                var $btns = $('<div class="file-panel">' + '<i class="iconfont icon-lajitong"></i></div>').appendTo($li);
                // 删除按钮toggle
                $li.on('mouseenter', function () {
                    $btns.stop().animate({ height: 30 });
                });

                $li.on('mouseleave', function () {
                    $btns.stop().animate({ height: 0 });
                });

                $btns.on('click', '.iconfont', function () {
                    upload.removeFile(file);
                });
                // $list为容器jQuery实例
                $(uploadlist).append($li);
            });
        },
        delete: function _delete(upload) {
            var _this = this;
            upload.onFileDequeued = function (file) {
                _this.removeFile(file);
            };
        },
        removeFile: function removeFile(file) {
            var $li = $('#' + file.id);
            $li.off().find('.file-panel').off().end().remove();
        }
    };

    var upload0 = new $webuploader({
        pick: '#logo',
        fileNumLimit: 1,
        uploadlist: '#upload-list0',
        fromData: {
            type: 'thumb'
        }
    }).init();
    var upload1 = new $webuploader({
        pick: '#fengcai',
        fileNumLimit: 6,
        uploadlist: '#upload-list1',
        fromData: {
            type: 'company_style'
        }
    }).init();
    var upload2 = new $webuploader({
        pick: '#brand',
        fileNumLimit: 6,
        uploadlist: '#upload-list2',
        fromData: {
            type: 'brand'
        }
    }).init();

    $('#submit').click(function () {
        upload0.upload();
        upload1.upload();
        upload2.upload();
    }

    // 日历
    );var cal = Calendar.setup({
        inputField: "founding",
        trigger: 'founding',
        fdow: 1,
        onSelect: function onSelect() {
            this.hide();
        }
    });

    // 表单验证
    $('#company_form').validate({
        errorPlacement: function errorPlacement(error, element) {
            element.closest('.input-box').append(error);
        },
        errorElement: 'p',
        rules: {
            founding: {
                data: true
            },
            phone: {
                required: true,
                isPhone: true
            }
        }
    });

    // 联系电话(手机/电话皆可)验证 
    jQuery.validator.addMethod("isPhone", function (value, element) {
        var length = value.length;
        var mobile = /^(((13[0-9]{1})|(15[0-9]{1}))+\d{8})$/;
        var tel = /^\d{3,4}-?\d{7,9}$/;
        return this.optional(element) || tel.test(value) || mobile.test(value);
    }, "请正确填写您的联系电话");

    $('.btn_forbidden').click(function () {
        upload0.upload();
    }
    // 省级联动
    );$("#distpicker1").distpicker();
});