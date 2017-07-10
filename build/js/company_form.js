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
    };
    $webuploader.prototype = {
        init: function init() {
            var upload = this.create();
            this.add(upload);
            this.delete(upload);
        },
        create: function create() {
            var pick = this.pick;
            var upload = WebUploader.create({
                // swf文件路径
                swf: '../static/Uploader.swf',

                // 文件接收服务端。
                server: 'http://webuploader.duapp.com/server/fileupload.php',

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
                fileNumLimit: 6
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
        uploadlist: '#upload-list0'
    }).init();
    var upload1 = new $webuploader({
        pick: '#fengcai',
        fileNumLimit: 1,
        uploadlist: '#upload-list1'
    }).init();
    var upload2 = new $webuploader({
        pick: '#brand',
        fileNumLimit: 1,
        uploadlist: '#upload-list2'
    }).init();

    // 日历
    var cal = Calendar.setup({
        inputField: "founding",
        trigger: 'founding',
        fdow: 1,
        onSelect: function onSelect() {
            this.hide();
        }
    });

    // 表单验证
    $('#company_form').validate({
        rules: {
            company_name: {
                required: true,
                email: true
            }
        },
        messages: {
            company_name: "请输入公司名称"
        }
    });
});