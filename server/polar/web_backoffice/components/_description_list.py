import contextlib
from collections.abc import Generator
from inspect import isgenerator
from typing import Generic, TypeVar

from fastapi import Request
from tagflow import tag, text

from ._clipboard_button import clipboard_button

M = TypeVar("M")


class DescriptionListItem(Generic[M]):
    label: str

    def __init__(self, label: str) -> None:
        self.label = label

    def render(self, request: Request, item: M) -> Generator[None] | None:
        raise NotImplementedError()

    @contextlib.contextmanager
    def _do_render(self, request: Request, item: M) -> Generator[None]:
        value = self.render(request, item)
        if isgenerator(value):
            yield from value
        else:
            yield


class DescriptionListAttrItem(Generic[M], DescriptionListItem[M]):
    attr: str
    clipboard: bool

    def __init__(
        self, attr: str, label: str | None = None, *, clipboard: bool = False
    ) -> None:
        self.attr = attr
        self.clipboard = clipboard
        super().__init__(label or attr)

    def render(self, request: Request, item: M) -> Generator[None] | None:
        value = self.get_value(item)
        with tag.div(classes="flex items-center gap-1"):
            text(value)
            if self.clipboard:
                with clipboard_button(value):
                    pass
        return None

    def get_value(self, item: M) -> str:
        return str(getattr(item, self.attr))


class DescriptionListDateTimeItem(DescriptionListAttrItem[M]):
    def get_value(self, item: M) -> str:
        value = getattr(item, self.attr)
        return value.strftime("%Y-%m-%d %H:%M:%S")


class DescriptionList(Generic[M]):
    def __init__(self, *items: DescriptionListItem[M]) -> None:
        self.items = items

    @contextlib.contextmanager
    def render(self, request: Request, data: M) -> Generator[None]:
        with tag.dl(classes="divide-y divide-gray-100"):
            with tag.div(classes="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0"):
                for item in self.items:
                    with tag.dt(classes="text-sm/6 font-medium"):
                        text(item.label)
                        with tag.dd(classes="mt-1 text-sm/6 sm:col-span-2 sm:mt-0"):
                            with item._do_render(request, data):
                                pass
        yield


__all__ = [
    "DescriptionListItem",
    "DescriptionListAttrItem",
    "DescriptionListDateTimeItem",
    "DescriptionList",
]
